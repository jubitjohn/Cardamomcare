import {
  db,
  firestore,
  collection,
  getDoc,
  doc,
} from "../firebase/firebaseConfig";

export const fetchData = async (
  collection_id,
  documentId,
  imagesCollection,
  imageId
) => {
  try {
    // Create a reference to the document
    const documentRef = doc(
      db,
      collection_id,
      documentId,
      imagesCollection,
      imageId
    );

    // Get the document
    const documentSnapshot = await getDoc(documentRef);

    // Check if the document exists
    if (documentSnapshot.exists()) {
      // Document data
      const documentData = documentSnapshot.data();
      return documentData;
    } else {
      console.log("Document does not exist!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
