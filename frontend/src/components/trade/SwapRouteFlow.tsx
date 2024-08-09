import React, { useEffect, useState, useRef } from "react";
import ReactFlow, { Background, Node, Edge, Position } from "reactflow";
import "reactflow/dist/base.css";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

interface SwapRouteFlowProps {
  firstSelectedItem: any;
  secondSelectedItem: any;
  firstInputValue: string;
  secondInputValue: string;
}

const SwapRouteFlow: React.FC<SwapRouteFlowProps> = ({
  firstSelectedItem,
  secondSelectedItem,
  firstInputValue,
  secondInputValue,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const nodesContainerRef = useRef<HTMLDivElement>(null);
  const [nodeWidths, setNodeWidths] = useState<number[]>([]);

  useEffect(() => {
    const updateMedia = () => {
      setViewportWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  useEffect(() => {
    if (nodesContainerRef.current) {
      const nodeElements = nodesContainerRef.current.querySelectorAll(".react-flow__node");
      const widths = Array.from(nodeElements).map(node => node.getBoundingClientRect().width);
      setNodeWidths(widths);
    }
  }, [nodesContainerRef, isMobile, firstInputValue, secondInputValue]);

  const calculateXPosition = (nodeIndex: number) => {
    const nodeWidth = nodeWidths[nodeIndex] || 200; // Default width if not yet measured
    return (viewportWidth - nodeWidth) / 2;
  };

  const generateNodes = () => {
    const nodes: Node[] = [
      {
        id: "1",
        data: {
          label: `${firstInputValue} ${firstSelectedItem.name}`,
          image: `${firstSelectedItem.name}`,
        },
        position: {
          x: isMobile ? calculateXPosition(0) : 0,
          y: isMobile ? 0 : 0,
        },
        type: "custom",
      },
      {
        id: "2",
        data: {
          label: `${secondSelectedItem.name}`,
          image: `${secondSelectedItem.name}`,
          description: "Monad DLMM",
        },
        position: {
          x: isMobile ? calculateXPosition(1) : 300,
          y: isMobile ? 200 : 200,
        },
        type: "custom",
      },
      {
        id: "3",
        data: {
          label: `${secondInputValue} ${secondSelectedItem.name}`,
          image: `${secondSelectedItem.name}`,
        },
        position: {
          x: isMobile ? calculateXPosition(2) : 600,
          y: isMobile ? 400 : 0,
        },
        type: "custom",
      },
    ];

    return nodes.map((node, index) => {
      let targetPosition = Position.Top;
      let sourcePosition = Position.Bottom;

      if (isMobile) {
        if (index === 0) {
          targetPosition = Position.Bottom;
          sourcePosition = Position.Bottom;
        } else if (index === nodes.length - 1) {
          targetPosition = Position.Top;
          sourcePosition = Position.Top;
        } else {
          targetPosition = Position.Top;
          sourcePosition = Position.Bottom;
        }
      } else {
        targetPosition = Position.Left;
        sourcePosition = Position.Right;

        if (index === 0) {
          targetPosition = Position.Bottom;
          sourcePosition = Position.Bottom;
        } else if (index === nodes.length - 1) {
          targetPosition = Position.Bottom;
          sourcePosition = Position.Bottom;
        } else {
          targetPosition = Position.Left;
          sourcePosition = Position.Right;
        }
      }

      return { ...node, targetPosition, sourcePosition };
    });
  };

  const nodes = generateNodes();

  const edges: Edge[] = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      type: "smoothstep",
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      animated: true,
      type: "smoothstep",
    },
  ];

  return (
    <div ref={nodesContainerRef} className="h-full w-full bg-primary-dark-500">
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
};

export default SwapRouteFlow;
