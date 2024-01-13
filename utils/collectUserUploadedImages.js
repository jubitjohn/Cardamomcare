import { db, getDocs, collection, query } from "../firebase/firebaseConfig";

export const collectUserUploadedImageData = async (
  collection_id,
  documentId,
  imagesCollection
) => {
  try {
    // Create a reference to the subcollection
    const imagesCollectionRef = collection(
      db,
      collection_id,
      documentId,
      imagesCollection
    );

    // Create a query to get all documents in the subcollection
    const q = query(imagesCollectionRef);

    // Get the documents
    const querySnapshot = await getDocs(q);

    // Create an array to store the data of all documents
    const documentDataArray = [];

    // Loop through the documents and add their data to the array
    querySnapshot.forEach((doc) => {
      documentDataArray.push(doc.data());
    });

    return documentDataArray;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You might want to rethrow the error to handle it in the calling code
  }
};
