export interface AllProducts {
    data: Data
    extensions: Extensions
}

export interface Data {
    products: Products
}

export interface Products {
    edges: Edge[]
}

export interface Edge {
    node: Node
}

export interface Node {
    id: string
    name: string
    price: string
    image: Image
    description: string
    slug: string
}

export interface Image {
    sourceUrl: string
    title: string
}

export interface Extensions {
    debug: Debug[]
}

export interface Debug {
    type: string
    message: string
}
