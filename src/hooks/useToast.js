import { useState } from "react";

function useToast() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    setTimeout(() => setShowToast(false), 1000);
  }, [showToast]);

  return [showToast, setShowToast];
}

export { useToast };
