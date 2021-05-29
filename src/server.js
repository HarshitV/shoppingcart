import { createServer } from "miragejs"

const server = () => {
    let server = createServer()
    const list = [];
    for (let i = 1; i <= 120; i++)
        list.push({
            id: i,
            name: "Sample Product - " + i});
    server.get("/api/products", list)
}

export default server;
