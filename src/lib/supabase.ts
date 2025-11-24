import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      departments: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon_name: string | null;
          order_position: number;
          created_at: string;
        };
      };
      candidates: {
        Row: {
          id: string;
          name: string;
          position: string;
          grade_level: string | null;
          department_id: string | null;
          photo_url: string | null;
          bio: string | null;
          personal_message: string | null;
          qualifications: string[];
          social_links: Record<string, string> | null;
          order_position: number;
          created_at: string;
          updated_at: string;
        };
      };
      proposals: {
        Row: {
          id: string;
          department_id: string;
          candidate_id: string | null;
          title: string;
          description: string;
          category: string | null;
          problem_statement: string | null;
          solution_details: string | null;
          expected_impact: string | null;
          timeline: string | null;
          budget_estimate: string | null;
          priority: number | null;
          order_position: number;
          created_at: string;
          updated_at: string;
        };
      };
      before_after: {
        Row: {
          id: string;
          title: string;
          category: string | null;
          before_description: string;
          after_description: string;
          before_image_url: string | null;
          after_image_url: string | null;
          impact_metric: string | null;
          order_position: number;
          created_at: string;
        };
      };
      team_updates: {
        Row: {
          id: string;
          title: string;
          content: string;
          image_url: string | null;
          category: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      idea_submissions: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: string;
          submitter_name: string | null;
          grade_level: string | null;
          is_anonymous: boolean;
          upvotes: number;
          status: string;
          admin_response: string | null;
          created_at: string;
        };
      };
      endorsements: {
        Row: {
          id: string;
          student_name: string;
          grade_level: string | null;
          testimonial: string | null;
          candidate_id: string | null;
          featured: boolean;
          verified: boolean;
          created_at: string;
        };
      };
    };
  };
};
