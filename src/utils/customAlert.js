import Swal from "sweetalert2";

const baseConfig = {
  customClass: {
    popup: "dark:bg-gray-800 dark:text-gray-300",
    title: "dark:text-gray-300",
    htmlContainer: "dark:text-gray-400",
  },
  showClass: {
    popup: "animate__animated animate__fadeIn animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOut animate__faster",
  },
};

export const confirmDelete = () => {
  return Swal.fire({
    ...baseConfig,
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    iconColor: "#EF4444", // red-500
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
    customClass: {
      ...baseConfig.customClass,
      confirmButton:
        "!bg-red-500 hover:!bg-red-600 focus:!ring-red-500/20 dark:focus:!ring-red-400/20",
      cancelButton:
        "!bg-gray-800 hover:!bg-gray-700 dark:!bg-gray-700 dark:hover:!bg-gray-600",
    },
  });
};

export const showSuccess = (
  title = "Success!",
  text = "Operation completed successfully."
) => {
  return Swal.fire({
    ...baseConfig,
    title,
    text,
    icon: "success",
    iconColor: "#10B981", // emerald-500
    customClass: {
      ...baseConfig.customClass,
      confirmButton:
        "!bg-emerald-500 hover:!bg-emerald-600 focus:!ring-emerald-500/20 dark:focus:!ring-emerald-400/20",
    },
  });
};

export const showError = (title = "Error!", text = "Something went wrong.") => {
  return Swal.fire({
    ...baseConfig,
    title,
    text,
    icon: "error",
    iconColor: "#EF4444", // red-500
    customClass: {
      ...baseConfig.customClass,
      confirmButton:
        "!bg-red-500 hover:!bg-red-600 focus:!ring-red-500/20 dark:focus:!ring-red-400/20",
    },
  });
};
