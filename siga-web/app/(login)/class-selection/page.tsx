import { fetchClasses } from "@/app/actions/authActions";
import ClassSelectionForm from "./_components/ClassSelectionForm";

const ClassSelectionPage = async () => {
  const classes = (await fetchClasses()).data;

  return <ClassSelectionForm data={classes} />;
};

export default ClassSelectionPage;
