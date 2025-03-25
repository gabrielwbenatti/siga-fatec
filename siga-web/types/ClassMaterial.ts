interface ClassMaterial {
  id?: number;
  title: string;
  description?: string;
  file_format?: string;
  file_url?: string;
  list_index?: number;
  class_id: number;
  is_active?: boolean;
}

export default ClassMaterial;
