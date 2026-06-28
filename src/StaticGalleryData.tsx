  import type { rawGalleryDataType } from "./App";
  
  export type staticGallery = {folder: string, count: number}[]
    
  const baseGalleryCategories: staticGallery = [
      {folder: 'Ironworks', count: 35},
      {folder: 'Patios_Outdoor_Living', count: 53},
      {folder: 'Planting_Softscapes', count: 34},
      {folder: 'Stonework_Grading', count: 23},
      {folder: 'Walkways_Pathways', count: 23},
      {folder: 'Water_Features_Ponds', count: 11},
      {folder: 'Creative_Projects', count: 6},
  ];

  export default function getStaticRawGalleryData(): rawGalleryDataType {
      const result: rawGalleryDataType = {};

      baseGalleryCategories.forEach((curCat) => {
        result[curCat.folder] = [];
        for (let i = 1; i <= curCat.count; i++) {
          result[curCat.folder].push(`${curCat.folder}/${i}`)
        }
      });

    return result;
  }