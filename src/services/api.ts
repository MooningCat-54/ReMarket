const API_URL = "http://localhost:8000";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  user_id: number;
  name: string;
  email: string;
}

export interface ProductCreateData {
  user_id: number;
  title: string;
  content: string;
  category: string;
  start_price: number;
  stock_count?: number;
  photo_url?: string;
}

export interface Product {
  id: number;
  user_id: number;
  title: string;
  content: string;
  category: string;
  start_price: number;
  stock_count: number;
  photo_url?: string;
  is_active: boolean;
  start_date: string;
}

export interface UserProfile {
  id: number;
  username: string;
  full_name: string;
  email: string;
  phone?: string | null;
  avatar_url?: string | null;
  banner_url?: string | null;
  bio?: string | null;
  is_corporate: boolean;
  created_at: string;
}

export interface Bid {
  id: number;
  product_id: number;
  user_id: number;
  amount: number;
  message?: string | null;
  created_at: string;
}

export interface BidCreateData {
  product_id: number;
  user_id: number;
  amount: number;
  message?: string;
}

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Giriş başarısız!");
  }

  return await response.json();
}

export async function registerUser(userData: RegisterData): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Kayıt başarısız!");
  }

  return await response.json();
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error("Ürünler yüklenirken bir hata oluştu.");
  }
  return await response.json();
}

export async function createProduct(productData: ProductCreateData) {
  const response = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Ürün oluşturulamadı!");
  }

  return await response.json();
}

export async function getUserProfile(userId: number): Promise<UserProfile> {
  const response = await fetch(`${API_URL}/profiles/${userId}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Kullanıcı profili bulunamadı.');
    }
    throw new Error('Sunucu hatası: Profil bilgileri alınamadı.');
  }

  return response.json();
}

export async function getBids(productId: number): Promise<Bid[]> {
  const response = await fetch(`${API_URL}/api/bids/${productId}`);
  if (!response.ok) {
    throw new Error("Teklifler yüklenirken bir hata oluştu.");
  }
  return await response.json();
}

export async function createBid(bidData: BidCreateData) {
  const response = await fetch(`${API_URL}/api/bids`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bidData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Teklif verilemedi!");
  }

  return await response.json();
}