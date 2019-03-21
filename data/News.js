
const url =
    "https://www.genesis-bde.fr/api/posts";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}