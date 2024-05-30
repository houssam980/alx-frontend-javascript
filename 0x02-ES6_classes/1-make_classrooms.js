import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sz = [19, 20, 34];

  return sz.map((sz) => new ClassRoom(sz));
}
