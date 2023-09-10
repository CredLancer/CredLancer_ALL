import * as React from "react";
import { QuestResponse } from "../utils/models";

interface ContextInterface {
  selectedQuest?: QuestResponse;
  updateSelectedQuest: (quest?: QuestResponse) => void;
  updateEditQuestStatus: (editing?: boolean) => void;
  editingQuest?: boolean;
}
const Context = React.createContext<ContextInterface | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

const QuestContext: React.FC<Props> = ({ children }) => {
  const [selectedQuest, setQuest] = React.useState<QuestResponse>();
  const [isEditing, setEditing] = React.useState<boolean>();

  const updateEditQuestStatus = (editing?: boolean) => setEditing(editing);
  const updateSelectedQuest = (quest?: QuestResponse) => setQuest(quest);

  return (
    <Context.Provider
      value={{
        selectedQuest,
        updateSelectedQuest,
        editingQuest: isEditing,
        updateEditQuestStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useQuestContext = () => React.useContext(Context);
export { QuestContext, useQuestContext };
