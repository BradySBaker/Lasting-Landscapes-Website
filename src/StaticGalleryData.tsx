  import type { landscapingCategory } from "./App";
  
  const baseLandscapingCategories: landscapingCategory[] = [ //Landscaping Photo and Category Info
      {name: 'Patios & Outdoor Living', dir: 'Patios_Outdoor_Living', urls: [], count: 53},
      {name: 'Planting & Softscapes', dir: 'Planting_Softscapes', urls: [], count: 34},
      {name: 'Stonework & Grading', dir: 'Stonework_Grading', urls: [], count: 23},
      {name: 'Walkways & Pathways', dir: 'Walkways_Pathways', urls: [], count: 23},
      {name: 'Water Features & Ponds', dir: 'Water_Features_Ponds', urls: [], count: 11},
      {name: 'Creative Projects', dir: 'Creative_Projects', urls: [], count: 6}
  ];
  
  export default function getStaticGalleryData() {
    return baseLandscapingCategories.map((cat) => ({
      ...cat,
      urls: Array.from(
        { length: cat.count },
        (_, i) =>
          `https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto,w_400/${cat.dir}/${i + 1}`
      ),
    }));
  }