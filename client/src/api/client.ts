import type { PublicSiteData } from '../types';

const API_BASE = '/api';

export function getAuthToken(): string | null {
  return localStorage.getItem('tj_admin_token');
}

export function setAuthToken(token: string): void {
  localStorage.setItem('tj_admin_token', token);
}

export function removeAuthToken(): void {
  localStorage.removeItem('tj_admin_token');
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = `HTTP Error ${response.status}`;
    try {
      const errJson = await response.json();
      if (errJson.error) errorMsg = errJson.error;
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  return response.json();
}

// Public API
export async function getPublicData(): Promise<{ success: boolean; data: PublicSiteData }> {
  return request<{ success: boolean; data: PublicSiteData }>('/public/data');
}

export async function submitEnquiry(payload: {
  full_name: string;
  mobile: string;
  city: string;
  email?: string;
  area_of_interest: string;
  preferred_contact: string;
  message?: string;
  consent_given: boolean;
}): Promise<{
  success: boolean;
  message: string;
  enquiry_id: string;
  whatsapp_redirect_url: string;
}> {
  return request('/public/enquiry', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Auth API
export async function loginAdmin(email: string, password: string) {
  return request<{
    message: string;
    token: string;
    user: { id: string; name: string; email: string; role: string };
  }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function getMe() {
  return request<{ user: { id: string; name: string; email: string; role: string } }>('/auth/me');
}

// Admin API
export async function getAdminOverview() {
  return request<{ success: boolean; data: any }>('/admin/overview');
}

export async function getAdminSettings() {
  return request<{ success: boolean; data: any }>('/admin/settings');
}

export async function updateAdminSettings(settings: any) {
  return request<{ success: boolean; data: any }>('/admin/settings', {
    method: 'PUT',
    body: JSON.stringify(settings),
  });
}

export async function getAdminHero() {
  return request<{ success: boolean; data: any }>('/admin/hero');
}

export async function updateAdminHero(hero: any) {
  return request<{ success: boolean; data: any }>('/admin/hero', {
    method: 'PUT',
    body: JSON.stringify(hero),
  });
}

export async function getAdminAbout() {
  return request<{ success: boolean; data: any }>('/admin/about');
}

export async function updateAdminAbout(about: any) {
  return request<{ success: boolean; data: any }>('/admin/about', {
    method: 'PUT',
    body: JSON.stringify(about),
  });
}

export async function getAdminCompany() {
  return request<{ success: boolean; data: any }>('/admin/company');
}

export async function updateAdminCompany(company: any) {
  return request<{ success: boolean; data: any }>('/admin/company', {
    method: 'PUT',
    body: JSON.stringify(company),
  });
}

// Opportunities
export async function getAdminOpportunities() {
  return request<{ success: boolean; data: any[] }>('/admin/opportunities');
}

export async function createAdminOpportunity(item: any) {
  return request<{ success: boolean; data: any }>('/admin/opportunities', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminOpportunity(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/opportunities/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminOpportunity(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/opportunities/${id}`, {
    method: 'DELETE',
  });
}

// How It Works
export async function getAdminHowItWorks() {
  return request<{ success: boolean; data: any[] }>('/admin/how-it-works');
}

export async function updateAdminHowItWorks(steps: any[]) {
  return request<{ success: boolean; data: any[] }>('/admin/how-it-works', {
    method: 'PUT',
    body: JSON.stringify(steps),
  });
}

// Team Members
export async function getAdminTeamMembers() {
  return request<{ success: boolean; data: any[] }>('/admin/team-members');
}

export async function createAdminTeamMember(item: any) {
  return request<{ success: boolean; data: any }>('/admin/team-members', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminTeamMember(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/team-members/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminTeamMember(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/team-members/${id}`, {
    method: 'DELETE',
  });
}

// Testimonials
export async function getAdminTestimonials() {
  return request<{ success: boolean; data: any[] }>('/admin/testimonials');
}

export async function createAdminTestimonial(item: any) {
  return request<{ success: boolean; data: any }>('/admin/testimonials', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminTestimonial(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/testimonials/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminTestimonial(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/testimonials/${id}`, {
    method: 'DELETE',
  });
}

// Earning Proofs
export async function getAdminEarningProofs() {
  return request<{ success: boolean; data: any[] }>('/admin/earning-proofs');
}

export async function createAdminEarningProof(item: any) {
  return request<{ success: boolean; data: any }>('/admin/earning-proofs', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminEarningProof(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/earning-proofs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminEarningProof(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/earning-proofs/${id}`, {
    method: 'DELETE',
  });
}

// Company Documents
export async function getAdminDocuments() {
  return request<{ success: boolean; data: any[] }>('/admin/documents');
}

export async function createAdminDocument(item: any) {
  return request<{ success: boolean; data: any }>('/admin/documents', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminDocument(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/documents/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminDocument(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/documents/${id}`, {
    method: 'DELETE',
  });
}

// Training Media
export async function getAdminTrainingMedia() {
  return request<{ success: boolean; data: any[] }>('/admin/training-media');
}

export async function createAdminTrainingMedia(item: any) {
  return request<{ success: boolean; data: any }>('/admin/training-media', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminTrainingMedia(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/training-media/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminTrainingMedia(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/training-media/${id}`, {
    method: 'DELETE',
  });
}

// Events
export async function getAdminEvents() {
  return request<{ success: boolean; data: any[] }>('/admin/events');
}

export async function createAdminEvent(item: any) {
  return request<{ success: boolean; data: any }>('/admin/events', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminEvent(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminEvent(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/events/${id}`, {
    method: 'DELETE',
  });
}

// FAQs
export async function getAdminFaqs() {
  return request<{ success: boolean; data: { faqs: any[]; categories: string[] } }>('/admin/faqs');
}

export async function createAdminFaq(item: any) {
  return request<{ success: boolean; data: any }>('/admin/faqs', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function updateAdminFaq(id: string, item: any) {
  return request<{ success: boolean; data: any }>(`/admin/faqs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
  });
}

export async function deleteAdminFaq(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/faqs/${id}`, {
    method: 'DELETE',
  });
}

// Enquiries
export async function getAdminEnquiries(status = 'All') {
  return request<{ success: boolean; data: any[] }>(`/admin/enquiries?status=${encodeURIComponent(status)}`);
}

export async function updateAdminEnquiryStatus(id: string, status: string) {
  return request<{ success: boolean; data: any }>(`/admin/enquiries/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  });
}

export async function addAdminEnquiryNote(id: string, note: string) {
  return request<{ success: boolean; data: any }>(`/admin/enquiries/${id}/notes`, {
    method: 'POST',
    body: JSON.stringify({ note }),
  });
}

export async function deleteAdminEnquiry(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/enquiries/${id}`, {
    method: 'DELETE',
  });
}

// Media
export async function getAdminMedia() {
  return request<{ success: boolean; data: any[] }>('/admin/media');
}

export async function uploadAdminMedia(file: File, altText: string) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('alt_text', altText);

  return request<{ success: boolean; data: any }>('/admin/media/upload', {
    method: 'POST',
    body: formData,
  });
}

export async function deleteAdminMedia(id: string) {
  return request<{ success: boolean; message: string }>(`/admin/media/${id}`, {
    method: 'DELETE',
  });
}

// Audit Logs
export async function getAdminAuditLogs() {
  return request<{ success: boolean; data: any[] }>('/admin/audit-logs');
}
