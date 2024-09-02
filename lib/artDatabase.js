import { Alert } from "react-native";
import {
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";



export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.sample1",
  projectId: "6673221d000f24dc94f5",
  databaseId: "6673223f0021f707aada",
  userCollectionId: "66732464003ca22e14f4",
  mandalaArtId: "66852fe30007185e906d",
  dokraCraftId: "668544d10014fb42a6dc",
  gondArtId: "6685518c0002504af7a3",
  wildlifeArtId: "66855df7002a7b997a64",
  sculptureId: "66855ce70009f4b2ae69",
  radhakrishnaArtId: "66855c20003aab91192e",
  modernAbstractId: "66855a380006567c680b",
  pattchitraArtId: "66855ae2001da80f7cce",
  madhubaniArtId: "668557e9001f735f0b77",
  latestArtId: "668557110038fdf8ac52",
  allArtId: "66865401000cb56b121a",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);


const databases = new Databases(client);
const artCollectionIds = {
  MandalaArt: "66852fe30007185e906d",
  DokraCraft: "668544d10014fb42a6dc",
  GondArt: "6685518c0002504af7a3",
  WildlifeArt: "66855df7002a7b997a64",
  SculptureArt: "66855ce70009f4b2ae69",
  RadhakrishnaArt: "66855c20003aab91192e",
  ModernAbstract: "66855a380006567c680b",
  PattachitraArt: "66855ae2001da80f7cce",
  MadhubaniArt: "668557e9001f735f0b77",
  LatestArt: "668557110038fdf8ac52",
  AllArt: "66865401000cb56b121a",
};
// For Creating Items -
export async function createItem(form) {
  try {
    const collectionId = artCollectionIds[form.artType];
    const newItem = await databases.createDocument(
      appwriteConfig.databaseId,
      collectionId,
      ID.unique(),
      {
        title: form.title,
        artist: form.artist,
        medium: form.medium,
        dimensions: form.dimensions,
        imageUrl: form.imageUrl,
        price: form.price,
        id: form.id,
        artistInfo: form.artistInfo,
        artType: form.artType
      }
    );

    return newItem;
  } catch (error) {
    throw new Error(error);
  }
}
export async function createAllArtItem(form) {
  try {
    const newItem = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.allArtId,
      ID.unique(),
      {
        title: form.title,
        artist: form.artist,
        medium: form.medium,
        dimensions: form.dimensions,
        imageUrl: form.imageUrl,
        price: form.price,
        id: form.id,
        artistInfo: form.artistInfo,
        artType: form.artType
      }
    );

    return newItem;
  } catch (error) {
    throw new Error(error);
  }
}


export async function deleteItems(documentId,artType) {
  try {
    const collectionId = artCollectionIds[artType];
    console.log(collectionId);
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      collectionId,
      documentId
    );
    console.log("Document deleted successfully");
    return
  } catch (error) {
    console.error("Error deleting document:", error);
    Alert.alert("Error", "Failed to delete item from database");
  }
};

export async function deleteAllArtItems(documentId) {
  try {
    const collectionId = artCollectionIds[AllArt];
    console.log(collectionId);
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      collectionId,
      documentId
    );
    console.log("Document deleted successfully");
    return
  } catch (error) {
    console.error("Error deleting document:", error);
    Alert.alert("Error", "Failed to delete item from database");
  }
};


export async function getArtItems(artType) {
  try {
    const collectionId = artCollectionIds[artType];

    const items = await databases.listDocuments(
      appwriteConfig.databaseId,
      collectionId
    );

    return items.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllArtItems() {
  try {
    const items = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.allArtId
    );

    return items.documents;
  } catch (error) {
    throw new Error(error);
  }
}
