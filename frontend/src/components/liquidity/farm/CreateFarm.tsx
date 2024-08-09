"use client";
import Card from "@/components/Card";
import SelectPair from "@/components/SelectPair";
import Stepper from "@/components/Stepper";
import { useContext, useState } from "react";
import { Item } from "@/static/interface";
import InputWithModal from "@/components/InputWithModal";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { StoreContext } from "@/stores/storePovider";
import { observer } from "mobx-react-lite";
import Coin from "@/components/Coin";
import Modal from "@/components/Modal";
import { format, parseISO } from "date-fns";
import Link from "next/link";


const CreateFarm = () => {
  const handleFinish = () => {
    console.log("Finished all steps");
  };

  const { priceStore } = useContext(StoreContext);
  const items = priceStore.getItems();
  const [initialStep, setInitialStep] = useState<number>(0);

  // POOL
  const [selectedPair, setSelectedPair] = useState<Item[]>([]);
  const [poolValue, setPoolValue] = useState<string>("");

  const handleSelectToken = (token: Item, index: number) => {
    const newSelectedPair = [...selectedPair];
    newSelectedPair[index] = token;
    setSelectedPair(newSelectedPair);
  };

  const [showDateModal, setShowDateModal] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState(false);

  const handleStartNowClick = () => {
    setCustomTime(true);
  };

  const handleCustomTimeClick = () => {
    setCustomTime(false);
  };

  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [firstInputValue, setFirstInputValue] = useState("");

  const handleFirstInputChange = (value: string) => {
    setFirstInputValue(value);
  };
  const handleEditPools = (value: number) => {
    setInitialStep(value);
  };
  const handleEditFarmReward = (value: number) => {
    setInitialStep(value);
  };

  const handleSelectFirstItem = (item: (typeof items)[0]) => {
    setFirstSelectedItem(item);
  };

  



  // State for date range
  const [startDateTime, setStartDateTime] =
    useState<string>("2024-08-13T14:49");
  const [endDateTime, setEndDateTime] = useState<string>("2024-08-20T14:49");

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

  const steps = [
    {
      content: (
        <>
          <Card className="p-5">
            <div className="mb-2">Select Pools</div>
            {/* CUSTOM TIME */}
            <div className="flex justify-between my-4 text-sm">
              <button
                className={`px-3 py-1 md:py-1.5 text-xs md:text-sm w-full rounded-l-sm md:rounded-l-lg ${
                  customTime
                    ? "bg-highlight-dark-500 text-white"
                    : "bg-highlight-dark-500/50"
                }`}
                onClick={handleStartNowClick}
              >
                CONCENTRATED
              </button>
              <button
                className={`px-3 py-1 md:py-1.5 text-xs md:text-sm w-full rounded-r-sm md:rounded-r-lg ${
                  !customTime
                    ? "bg-highlight-dark-500 text-white"
                    : "bg-highlight-dark-500/50"
                }`}
                onClick={handleCustomTimeClick}
              >
                STANDARD
              </button>
            </div>
            <SelectPair
              items={items}
              selectedItems={selectedPair}
              onSelectItem={handleSelectToken}
            />

            <div className="flex text-xs space-x-2 my-4">
              <div>Cant Find What You Want?</div>
              <Link href={"/liquidity/standard-pools/create"} className="text-primary-gold-500">Create New Pool</Link>
            </div>
          </Card>
        </>
      ),
    },
    {
      content: (
        <>
          {/* REWARD TOKEN */}
          <Card className="p-5">
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
                  {formatTime(startDateTime)}
                  (UTC)
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
                  {formatTime(endDateTime)}
                  (UTC)
                </div>
              </div>
            </div>

            <div className="text-xs bg-highlight-dark-500 px-2 py-1 rounded-md mt-4 flex justify-between items-center">
              <div>Estimated rewards / weeks</div>
              <div className="text-base">400 MON</div>
            </div>
          </Card>
        </>
      ),
    },
    {
      content: (
        <>
          <Card className="flex flex-col my-4 p-5">
            <div className="flex w-full justify-between text-xs text-white/60">
              <div className="">Pools</div>
              <div className="flex">
                <button
                  type="button"
                  className="bg-highlight-dark-500 text-white p-1 rounded-full"
                  onClick={() => handleEditPools(0)}
                >
                  <FiEdit />
                </button>
              </div>
            </div>
            <div className="flex gap-1 items-center mt-2">
              <div className="flex-grow flex flex-col">
                <div className="flex">
                  <div className="flex -space-x-1 mr-2">
                    <Coin name={firstSelectedItem.name} size={24} />
                    <Coin name={firstSelectedItem.name} size={24} />
                  </div>
                  USDC/MON
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="text-[10px] text-white/50">TVL</div>
                <div className="text-sm ">0.00</div>
              </div>
              <div className="flex-1 flex flex-col items-end">
                <div className="text-[10px] text-white/50">APR</div>
                <div className="text-sm ">0%</div>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col my-4 p-5">
            <div className="flex w-full justify-between text-xs text-white/60">
              <div className="">Farming Reward</div>
              <div className="flex">
                <button
                  type="button"
                  className="bg-highlight-dark-500 text-white p-1 rounded-full"
                  onClick={() => handleEditFarmReward(1)}
                >
                  <FiEdit />
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-2">
              <div className="flex-grow flex flex-col">
                <div className="flex">
                  <div className="mr-2">
                    <Coin name={firstSelectedItem.name} size={24} />
                  </div>
                  {firstSelectedItem.name}
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <div className="text-sm ">400</div>
                <div className="text-[10px] text-white/50">400/week</div>
              </div>
              <div className="flex-grow flex flex-col items-end max-w-[150px] md:max-w-[170px]">
                <div className="flex w-full justify-between items-center">
                  <div className="text-sm text-nowrap">2024/6/13</div>-
                  <div className="text-sm text-nowrap">2024/6/13</div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="text-[10px] text-white/50">APR</div>
                  <div className="text-[10px] text-white/50">APR</div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="flex justify-between items-center p-5">
            <div className="text-xs">Total Value</div>
            <div className="font-bold">$12</div>
          </Card>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-xl w-full mx-auto mt-8 md:p-4">
      <Stepper
        steps={steps}
        onFinish={handleFinish}
        initialStep={initialStep}
        // className="w-full"
      />
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

export default observer(CreateFarm);
