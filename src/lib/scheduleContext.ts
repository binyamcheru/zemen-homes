import { createContext, useContext } from "react";

export const ScheduleContext = createContext<() => void>(() => {});

export const useSchedule = () => useContext(ScheduleContext);
