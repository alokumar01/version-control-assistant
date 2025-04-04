import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    console.log("🔍 Received query:", query);

    if (!query) {
      return NextResponse.json({ message: "❌ Please ask a valid question!" }, { status: 400 });
    }

    const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
    if (!GITHUB_ACCESS_TOKEN) {
      console.error("❌ GitHub token is missing!");
      return NextResponse.json({ message: "❌ GitHub token is missing!" }, { status: 500 });
    }

    // 🔥 Fetch user repositories from GitHub API
    const githubResponse = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!githubResponse.ok) {
      const errorText = await githubResponse.text();
      console.error("❌ GitHub API Error:", errorText);
      return NextResponse.json({ message: "❌ Failed to fetch repositories from GitHub!" }, { status: 500 });
    }

    const repos = await githubResponse.json();
    console.log("✅ GitHub API Response:", repos);

    if (!Array.isArray(repos) || repos.length === 0) {
      return NextResponse.json({ message: "❌ No repositories found!" }, { status: 404 });
    }

    // 🔥 Process the repositories
    const formattedRepos = repos.map(repo => ({
      name: repo.name || "Unknown",
      description: repo.description || "No description available.",
      visibility: repo.private ? "🔐 Private" : "🌍 Public",
      stars: repo.stargazers_count || 0,
      url: repo.html_url || "#",
    }));

    return NextResponse.json({
      message: "✅ Here are your repositories:",
      repositories: formattedRepos.sort((a, b) => b.stars - a.stars).map(repo => ({
        text: `📌 **${repo.name}**\n🔗 [GitHub Link](${repo.url})\n📝 *${repo.description}*\n🔒 Visibility: **${repo.visibility}**\n⭐ Stars: **${repo.stars}**`
      })),
    });

  } catch (error) {
    console.error("❌ Unexpected Error:", error);
    return NextResponse.json({ message: "❌ An error occurred!", error: error.message }, { status: 500 });
  }
}
