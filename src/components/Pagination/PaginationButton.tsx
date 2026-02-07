export default function PaginationButton({
  page,
  isActive,
  setCurrentPage,
}: {
  page: number;
  isActive?: boolean;
  setCurrentPage: (page: number) => void;
}) {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg ${
        isActive && "bg-primary text-secondary"
      }`}
    >
      {page}
    </button>
  );
}
