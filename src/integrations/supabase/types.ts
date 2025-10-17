export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string;
          created_at: string;
          service: string;
          service_label: string;
          date_iso: string | null;
          date_display: string | null;
          time_slot: string;
          first_name: string;
          last_name: string;
          email: string | null;
          phone: string;
          street: string;
          postal_code: string;
          city: string;
          message: string | null;
          status: string;
          source: string;
          approval_token: string;
          metadata: Json | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          service: string;
          service_label: string;
          date_iso?: string | null;
          date_display?: string | null;
          time_slot: string;
          first_name: string;
          last_name: string;
          email?: string | null;
          phone: string;
          street: string;
          postal_code: string;
          city: string;
          message?: string | null;
          status?: string;
          source?: string;
          approval_token: string;
          metadata?: Json | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          service?: string;
          service_label?: string;
          date_iso?: string | null;
          date_display?: string | null;
          time_slot?: string;
          first_name?: string;
          last_name?: string;
          email?: string | null;
          phone?: string;
          street?: string;
          postal_code?: string;
          city?: string;
          message?: string | null;
          status?: string;
          source?: string;
          approval_token?: string;
          metadata?: Json | null;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          contact: string;
          email: string | null;
          phone: string | null;
          message: string;
          metadata: Json | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          contact: string;
          email?: string | null;
          phone?: string | null;
          message: string;
          metadata?: Json | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          contact?: string;
          email?: string | null;
          phone?: string | null;
          message?: string;
          metadata?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
