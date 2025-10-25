import { useEffect, useState } from "react";

const useConfig = () => {
  return window.config.get();
};

export default useConfig;
