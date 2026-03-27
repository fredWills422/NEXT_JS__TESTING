import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

export async function resetDb(): Promise<void> {

  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    console.log("Warning: database reset unavailable outside of test environment");
    return;
  }
  const { fakeShows, fakeBands, fakeUsers, fakeReservations } = await readFakeData();
  await Promise.all([
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.users, fakeUsers),
    writeJSONToFile(filenames.reservations, fakeReservations),
  ]);

};