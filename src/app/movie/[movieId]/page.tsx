interface Params {
    params: { movieId: string }
}

export default function MovieInnerPage({ params }: Params) {

    return (
        <h1>Movie Inner page {params.movieId}</h1>
    )
}