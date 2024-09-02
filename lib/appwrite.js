
import { Alert } from "react-native";
import {
  Account,
  Avatars,
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
  cartItemsId: "6675564d0010b04240ed",
  orderItemsId: "668430630017114d5be0",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
// const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSessions();
    return session;
  } catch (error) {
    throw new Error("Signed Out function not working");
  }
}


export async function createCartItem(form) {
  try {
    const newCartItem = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.cartItemsId,
      ID.unique(),
      {
        title: form.title,
        artist: form.artist,
        medium: form.medium,
        dimensions: form.dimensions,
        imageUrl: form.imageUrl,
        creator: form.userId,
        price: form.price,
        id: form.id,
      }
    );

    return newCartItem;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCartItem(documentId) {
  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.cartItemsId,
      documentId
    );
    console.log("Document deleted successfully");
    return
  } catch (error) {
    console.error("Error deleting document:", error);
    Alert.alert("Error", "Failed to delete item from cart");
  }
};

export async function getCartItems(userId) {
  try {
    const cartItems = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.cartItemsId,
      [Query.equal("creator", userId)]
    );

    return cartItems.documents;
  } catch (error) {
    throw new Error(error);
  }
}
