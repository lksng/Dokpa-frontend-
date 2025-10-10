import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BookingDraft {
  id: string;
  type: 'activity' | 'homestay' | 'tour';
  itemId: number;
  itemTitle: string;
  itemImage: string;
  price: number;
  quantity: number;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}

interface BookingState {
  bookingDrafts: BookingDraft[];
  activeBooking: BookingDraft | null;
}

interface BookingActions {
  addToCart: (draft: Omit<BookingDraft, 'id' | 'createdAt' | 'updatedAt'>) => void;
  removeFromCart: (id: string) => void;
  updateBooking: (id: string, updates: Partial<BookingDraft>) => void;
  clearCart: () => void;
  setActiveBooking: (booking: BookingDraft | null) => void;
  getBookingById: (id: string) => BookingDraft | undefined;
  getTotalPrice: () => number;
}

type BookingStore = BookingState & BookingActions;

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      // Initial state
      bookingDrafts: [],
      activeBooking: null,

      // Actions
      addToCart: (draft) => {
        const newDraft: BookingDraft = {
          ...draft,
          id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        set((state) => ({
          bookingDrafts: [...state.bookingDrafts, newDraft]
        }));
      },

      removeFromCart: (id) => {
        set((state) => ({
          bookingDrafts: state.bookingDrafts.filter((draft) => draft.id !== id),
          activeBooking: state.activeBooking?.id === id ? null : state.activeBooking
        }));
      },

      updateBooking: (id, updates) => {
        set((state) => ({
          bookingDrafts: state.bookingDrafts.map((draft) =>
            draft.id === id
              ? { ...draft, ...updates, updatedAt: new Date().toISOString() }
              : draft
          ),
          activeBooking: state.activeBooking?.id === id
            ? { ...state.activeBooking, ...updates, updatedAt: new Date().toISOString() }
            : state.activeBooking
        }));
      },

      clearCart: () => {
        set({ bookingDrafts: [], activeBooking: null });
      },

      setActiveBooking: (booking) => {
        set({ activeBooking: booking });
      },

      getBookingById: (id) => {
        return get().bookingDrafts.find((draft) => draft.id === id);
      },

      getTotalPrice: () => {
        return get().bookingDrafts.reduce((total, draft) => total + (draft.price * draft.quantity), 0);
      }
    }),
    {
      name: 'dokpa-bookings',
      version: 1
    }
  )
);
