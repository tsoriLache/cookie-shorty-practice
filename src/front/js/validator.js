export default function isValidHttpUrl (string) {
    let url;
    try {
      url = new URL(string);
    } catch {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

