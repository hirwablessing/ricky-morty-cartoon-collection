const BASE_URI: string | undefined = process.env.REACT_APP_REST_RICK_MORTY_ENDPOINT;

export const restEndpoint = () => {
    if (!BASE_URI) throw new Error("Rick and Morty REST API endpoint not defined!!!")

    return BASE_URI
}