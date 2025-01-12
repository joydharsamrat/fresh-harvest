import Loader from "@/components/shared/Loader";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
