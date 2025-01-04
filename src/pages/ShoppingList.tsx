import { useParams } from "react-router-dom";
import PageLayout from "../ui/PageLayout";

function ShoppingList() {
  const { id } = useParams();

  return (
    <PageLayout title={`Shopping list: ${id}`}>
      <div>here</div>
    </PageLayout>
  );
}

export default ShoppingList;
