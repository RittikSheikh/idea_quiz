
export const dataLoader = async () => {
    const loader = await fetch('https://openapi.programming-hero.com/api/quiz')
    const data = await loader.json()
    return data
}