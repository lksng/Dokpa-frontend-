import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  activeModal: string | null;
  showNavbar: boolean;
  lastScrollY: number;
  isLoading: boolean;
}

interface UIActions {
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
  setNavbarVisibility: (visible: boolean) => void;
  setLastScrollY: (scrollY: number) => void;
  setLoading: (loading: boolean) => void;
}

type UIStore = UIState & UIActions;

export const useUIStore = create<UIStore>((set) => ({
  // Initial state
  isMobileMenuOpen: false,
  activeModal: null,
  showNavbar: true,
  lastScrollY: 0,
  isLoading: false,

  // Actions
  toggleMobileMenu: () => {
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }));
  },

  setMobileMenuOpen: (open) => {
    set({ isMobileMenuOpen: open });
  },

  openModal: (modalId) => {
    set({ activeModal: modalId });
  },

  closeModal: () => {
    set({ activeModal: null });
  },

  setNavbarVisibility: (visible) => {
    set({ showNavbar: visible });
  },

  setLastScrollY: (scrollY) => {
    set({ lastScrollY: scrollY });
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  }
}));
