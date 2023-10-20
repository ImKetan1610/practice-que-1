// import React, { useState } from "react";

// function App() {
//   const [box1Items, setBox1Items] = useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//   ]);
//   const [box2Items, setBox2Items] = useState([]);
//   const [checkedItems, setCheckedItems] = useState(new Set());

//   // Function to handle checkbox changes
//   const handleCheckboxChange = (item) => {
//     const newCheckedItems = new Set(checkedItems);
//     if (newCheckedItems.has(item)) {
//       newCheckedItems.delete(item);
//     } else {
//       newCheckedItems.add(item);
//     }
//     setCheckedItems(newCheckedItems);
//   };

//   // Function to transfer checked items to Box 2
//   const transferCheckedItems = () => {
//     const itemsToTransfer = [...checkedItems];
//     setBox2Items([...box2Items, ...itemsToTransfer]);

//     // Remove transferred items from Box 1
//     const newBox1Items = box1Items.filter(
//       (item) => !itemsToTransfer.includes(item)
//     );
//     setBox1Items(newBox1Items);

//     // Clear the checked items
//     setCheckedItems(new Set());
//   };

//   return (
//     <div className="App">
//       <div className="box">
//         <h2>Box 1</h2>
//         {box1Items.map((item, index) => (
//           <div key={index}>
//             <input
//               type="checkbox"
//               checked={checkedItems.has(item)}
//               onChange={() => handleCheckboxChange(item)}
//             />
//             {item}
//           </div>
//         ))}
//       </div>
//       <div className="box">
//         <h2>Box 2</h2>
//         {box2Items.map((item, index) => (
//           <div key={index}>
//             <input
//               type="checkbox"
//               checked={checkedItems.has(item)}
//               onChange={() => handleCheckboxChange(item)}
//             />
//             {item}
//           </div>
//         ))}
//       </div>
//       <button onClick={transferCheckedItems}>Toggle</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Box, Stack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(["item1", "item2", "item3", "item4"]);
  const [box1Item, setBox1Items] = useState(items);
  const [box2Item, setBox2Items] = useState([]);
  const [checkedItem, setCheckedItems] = useState(new Set());

  const handleCheckboxChange = (item) => {
    const newCheckedItems = new Set(checkedItem);
    if (newCheckedItems.has(item)) {
      newCheckedItems.delete(item);
    } else {
      newCheckedItems.add(item);
    }
    setCheckedItems(newCheckedItems);
    console.log(newCheckedItems);
  };

  const transferCheckedItemsToBox2 = () => {
    const itemsToTransfer = [...checkedItem];
    setBox2Items([...box2Item, ...itemsToTransfer]);

    // Remove transferred items from Box 1
    const newBox1Items = box1Item.filter(
      (item) => !itemsToTransfer.includes(item)
    );
    setBox1Items(newBox1Items);

    // Clear the checked items
    setCheckedItems(new Set());
  };

  const transferCheckedItemsToBox1 = () => {
    const itemsToTransfer = [...checkedItem];
    setBox2Items([...box1Item, ...itemsToTransfer]);

    // Remove transferred items from Box 1
    const newBox2Items = box2Item.filter(
      (item) => !itemsToTransfer.includes(item)
    );
    setBox1Items(newBox2Items);

    // Clear the checked items
    setCheckedItems(new Set());
  };
  return (
    <div className="App">
      <Box bg="teal" w="40%" color="white" borderRadius="2%" p="2%">
        {box1Item.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(item)}
            />
            {item}
          </div>
        ))}
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0 10%",
        }}
      >
        <Button
          w="2rem"
          h="2rem"
          colorScheme="blue"
          variant="outline"
          sx={{ border: "transparent", borderRadius: "50%", margin: "1rem" }}
          onClick={transferCheckedItemsToBox2}
        >
          <ArrowForwardIcon />
        </Button>
        <Button
          w="2rem"
          h="2rem"
          colorScheme="teal"
          variant="outline"
          sx={{ border: "transparent", borderRadius: "50%", margin: "1rem" }}
          onClick={transferCheckedItemsToBox1}
        >
          <ArrowBackIcon />
        </Button>
      </Stack>
      <Box bg="teal" w="40%" color="white" borderRadius="2%" p="2%">
        {box2Item.map((item, index) => (
          <div key={index}>
            <input type="checkbox" />
            {item}
          </div>
        ))}
      </Box>
    </div>
  );
};

export default App;
