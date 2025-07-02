import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$id")({
  parseParams: (params) => ({
    id: params.id,
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { id } = Route.useParams();
  console.log("O ID do produto capturado é:", id);

  return (
    <div>
      <h2>o id capturado é: {id || "ID não capturado"}</h2>
    </div>
  );
}
