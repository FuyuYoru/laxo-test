export interface Deal {
  order_id: string;
  order_status_id: string;
  order_user_creator: string;
  order_user_mentor: string;
  chat_id: string;
  contact_id: string;
  order_sum: string;
  funnel_id: string;
  order_deleted: null;
  order_name: string;
  order_create_date: string;
  order_change_date: string;
  order_final_date: string;
  order_success: string;
  order_user_worker: string;
  contact_name: string;
  contact_parent_id: string;
  contact_deleted: string;
  open_job_count: string;
  job_count: string;
  like: string;
  tags: string;
}

export interface DealStatus {
  field_scope_id: string;
  funnel_id: string;
  order_priority: string;
  order_status_final: string | null;
  order_status_id: string;
  order_status_name: string;
  order_status_style: string;
}
