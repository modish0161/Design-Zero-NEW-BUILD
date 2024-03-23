// utils/featureFlags.ts
export const isAdminBuild = (): boolean => process.env.NEXT_PUBLIC_ADMIN_BUILD === 'true';
