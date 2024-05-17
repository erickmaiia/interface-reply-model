import { useState, useEffect } from "react";
import axios from "axios";
import { HistoryItem } from "../types/HistoryItem";

export const useLocalStorageHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("history");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return { history, setHistory };
};

export const useHandleSubmit = (
  textAreaValue: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>,
  setSentiment: React.Dispatch<React.SetStateAction<string>>,
  history: HistoryItem[]
) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!textAreaValue.trim()) {
      console.error("Text area is empty.");
      return;
    }

    setLoading(true);

    const url = "https://rest-api-dus2eb35vq-uc.a.run.app/process_text/";

    axios
      .post(
        url,
        {
          text: textAreaValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { sentiment } = response.data;

        const date = new Date().toLocaleString();
        const newData: HistoryItem = {
          date: date,
          sentiment: sentiment,
          text: textAreaValue,
        };

        const updatedHistory = [...history, newData];
        localStorage.setItem("history", JSON.stringify(updatedHistory));

        setHistory(updatedHistory);
        setSentiment(sentiment);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return handleSubmit;
};

export const useHandleSelection = (
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>,
  selectedItems: number[]
) => {
  const handleSelection = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(
        selectedItems.filter((itemIndex) => itemIndex !== index)
      );
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  return handleSelection;
};

export const useDeleteAllItems = (
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>
) => {
  const deleteAllItems = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return deleteAllItems;
};

export const useDeleteSelectedItems = (
  selectedItems: number[],
  history: HistoryItem[],
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>,
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const deleteSelectedItems = () => {
    const remainingItems = history.filter(
      (_item, index) => !selectedItems.includes(index)
    );
    localStorage.setItem("history", JSON.stringify(remainingItems));
    setHistory(remainingItems);
    setSelectedItems([]);
  };

  return deleteSelectedItems;
};
