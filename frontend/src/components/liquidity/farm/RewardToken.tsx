"use client";
import { useState, useContext } from "react";
import { Item } from "@/static/interface";
import InputWithModal from "@/components/InputWithModal";
import { FiPlus, FiTrash } from "react-icons/fi";
import { StoreContext } from "@/stores/storePovider";
import Coin from "@/components/Coin";
import Modal from "@/components/Modal";
import { format, parseISO } from "date-fns";
// import { formatDate, formatTime, calculateDays } from "@/utils/dateUtils"; // Assuming you put these utility functions in a file
import Card from "@/components/Card";

interface EditRewardProps {
  handleEditFarmReward: (value: number) => void;
}

const EditReward = ({ handleEditFarmReward }: EditRewardProps) => {
  const { priceStore } = useContext(StoreContext);
  const items = priceStore.getItems();
  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [showDateModal, setShowDateModal] = useState<boolean>(false);
  const [startDateTime, setStartDateTime] =
    useState<string>("2024-08-13T14:49");
  const [endDateTime, setEndDateTime] = useState<string>("2024-08-20T14:49");

  const handleSelectFirstItem = (item: (typeof items)[0]) => {
    setFirstSelectedItem(item);
  };

  const handleFirstInputChange = (value: string) => {
    setFirstInputValue(value);
  };

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "startDateTime") {
      setStartDateTime(value);
    } else if (name === "endDateTime") {
      setEndDateTime(value);
    }
  };

  const calculateDays = (start: string, end: string) => {
    const startDate = parseISO(start);
    const endDate = parseISO(end);
    const differenceInMillis = endDate.getTime() - startDate.getTime();
    const differenceInDays = Math.ceil(
      differenceInMillis / (1000 * 60 * 60 * 24)
    );
    return differenceInDays;
  };

  // Format date and time
  const formatDate = (dateTime: string) =>
    format(parseISO(dateTime), "yyyy-MM-dd");
  const formatTime = (dateTime: string) => format(parseISO(dateTime), "HH:mm");

  return (
    <div className="max-w-xl w-full mx-auto mt-8 md:p-4">
      <div className="text-xs p-1 mt-4">Pools</div>
      <Card className="p-5">
        <div className="text-xs">Pools</div>
      </Card>
      <div className="text-xs p-1 mt-4">Farming Reward</div>
      <Card className="p-5">
        <div className="text-xs">Reward Token 1</div>
      </Card>
      <Card className="mt-5">
        <div className="flex-col ">
          <div className="flex justify-between items-center text-[10px] mb-2">
            <button className="text-white p-0.5 rounded text-xs font-semibold">
              Reward Token 1
            </button>
            <div className="flex space-x-1">
              <button
                type="button"
                className="bg-highlight-dark-500 text-white p-1 rounded-full"
              >
                <FiPlus />
              </button>
              <button
                type="button"
                className="bg-highlight-dark-500 text-white p-1 rounded-full"
              >
                <FiTrash />
              </button>
            </div>
          </div>
          <InputWithModal
            items={items}
            selectedItem={firstSelectedItem}
            inputValue={firstInputValue}
            onSelectItem={handleSelectFirstItem}
            onInputChange={handleFirstInputChange}
          />
        </div>

        {/* DATERANGE REWARD */}
        <div
          className="bg-primary-dark-500 mt-4 p-4 flex justify-between items-center rounded-md cursor-pointer"
          onClick={() => setShowDateModal(true)}
        >
          <div>
            <div className="text-[10px] md:text-xs text-white/50">
              Farming Start
            </div>
            <div className="text-sm md:text-md font-bold">
              {formatDate(startDateTime)}
            </div>
            <div className="text-[10px] md:text-xs text-white/50">
              {formatTime(startDateTime)} (UTC)
            </div>
          </div>
          <div className="bg-highlight-dark-500 text-[10px] md:text-xs px-5 py-1 rounded font-bold">
            {calculateDays(startDateTime, endDateTime)} Days
          </div>
          <div className="text-end">
            <div className="text-[10px] md:text-xs text-white/50">
              Farming End
            </div>
            <div className="text-sm md:text-md font-bold">
              {formatDate(endDateTime)}
            </div>
            <div className="text-[10px] md:text-xs text-white/50">
              {formatTime(endDateTime)} (UTC)
            </div>
          </div>
        </div>

        <div className="text-xs bg-highlight-dark-500 px-2 py-1 rounded-md mt-4 flex justify-between items-center">
          <div>Estimated rewards / weeks</div>
          <div className="text-base">400 MON</div>
        </div>
      </Card>

      <div className="!bg-transparent mt-5">
        <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
          <div className="py-3 md:py-3 text-md md:text-xl rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
            CONFIRM
          </div>
        </button>
      </div>

      {/* Modal for date range */}
      <Modal isOpen={showDateModal} onClose={() => setShowDateModal(false)}>
        <div className="flex flex-col space-y-4">
          <label className="text-sm text-white/80">
            Farming Start Date & Time
          </label>
          <input
            type="datetime-local"
            name="startDateTime"
            value={startDateTime}
            onChange={handleDateTimeChange}
            className="p-2 border border-gray-300 rounded"
          />
          <label className="text-sm text-white/80">
            Farming End Date & Time
          </label>
          <input
            type="datetime-local"
            name="endDateTime"
            value={endDateTime}
            onChange={handleDateTimeChange}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => setShowDateModal(false)}
            className="px-4 py-2 bg-primary-gold-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EditReward;
