import { fetchClasses } from "@/app/actions/authActions";
import ClassSelectionForm from "./components/form";

const ClassSelectionPage = async () => {
  const classes = (await fetchClasses()).data;

  return <ClassSelectionForm data={classes} />;
};

export default ClassSelectionPage;
