import ClassBibliography from "@/types/ClassBibliography";

interface Props {
  bibliography: ClassBibliography;
}

const BibliographyListItem = ({ bibliography }: Props) => {
  return <div>{bibliography.reference}</div>;
};

export default BibliographyListItem;
