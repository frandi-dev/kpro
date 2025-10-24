import { useEffect, useState } from "react";

const useConfig = () => {
  const [config, setConfig] = useState({});
  useEffect(() => {
    setConfig(window.config.get());
  }, []);

  return config;
};

export default useConfig;
