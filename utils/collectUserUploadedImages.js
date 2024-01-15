import {
  db,
  firestore,
  collection,
  getDoc,
  getDocs,
  doc,
  listCollections,
} from "../firebase/firebaseConfig";

export const collectUserUploadedImageData = async (
  collection_id,
  documentId,
  imagesCollection
  //   imageId
) => {
  try {
    // Create a reference to the document
    // User document
    const userDocRef = doc(db, collection_id, documentId);

    // Reference to image subcollections
    const imagesCollectionRef = collection(userDocRef, imagesCollection);

    // Fetch documents from the image subcollection
    const querySnapshot = await getDocs(imagesCollectionRef);
    console.log("Testing querySnapshot fetch", querySnapshot);

    const imageData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    console.log("Testing imageData fetch", imageData);

    return imageData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
