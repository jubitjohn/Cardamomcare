import { db } from "../firebase/firebaseConfig";

export const fetchDataFromFirebase = async (collection_id, documentId) => {
  try {
    // Create a reference to the document
    const documentRef = db.doc(collection_id + "/" + documentId);

    // Get the document
    const documentSnapshot = await documentRef.get();

    // Check if the document exists
    if (documentSnapshot.exists) {
      // Document data
      const documentData = documentSnapshot.data();
      return documentData;
    } else {
      console.log("Document does not exist!");
    }
  } catch (error) {
    console.error("Error fetching data from Data from DB:", error);
  }
};
