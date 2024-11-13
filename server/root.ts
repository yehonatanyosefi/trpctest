import { createTRPCRouter } from '@/trpc/server/trpc'

// Admin routes
import { adminEmailRouter } from '@/packages/admin/features/admin-email/admin-email.router'
import { adminInternalBlogRouter } from '@/packages/admin/features/internal-blog/internal-blog.router'
import { adminInternalChangelogRouter } from '@/packages/admin/features/internal-changelog/internal-changelog.router'
import { adminInternalFeedbackRouter } from '@/packages/admin/features/internal-feedback/internal-feedback.router'
import { adminInternalRoadmapRouter } from '@/packages/admin/features/internal-roadmap/internal-roadmap.router'
import { adminMaintenanceModeRouter } from '@/packages/admin/features/maintenance-mode/maintenance-mode.router'
import { adminOrganizationRouter } from '@/packages/admin/features/organization/organization.router'
import { adminSecurityRouter } from '@/packages/admin/features/security/security.router'
import { adminStripeRouter } from '@/packages/admin/features/stripe/stripe.router'
import { adminUserRouter } from '@/packages/admin/features/user/user.router'

// AI routes
import { aiImageRouter } from '@/packages/user/features/ai/image/image.router'
import { aiTextRouter } from '@/packages/user/features/ai/text/text.router'

// Anon routes
import { internalBlogRouter as anonInternalBlogRouter } from '@/packages/anon/features/internal-blog/internal-blog.router'
import { internalChangelogRouter as anonInternalChangelogRouter } from '@/packages/anon/features/internal-changelog/internal-changelog.router'
import { internalFeedbackRouter as anonInternalFeedbackRouter } from '@/packages/anon/features/internal-feedback/internal-feedback.router'
import { revalidateRouter } from '@/packages/anon/features/revalidate/revalidate.router'

// Auth routes
import { authRouter } from '@/packages/auth/features/auth/auth.router'
import { socialMediaRouter } from '@/packages/auth/features/social-media/social-media.router'

// User routes
import { brandRouter } from '@/packages/user/features/brand/brand.router'
import { campaignRouter } from '@/packages/user/features/campaign/campaign.router'
import { contentRouter } from '@/packages/user/features/content/content.router'
import { fileRouter } from '@/packages/user/features/file/file.router'
import { internalFeedbackRouter } from '@/packages/user/features/internal-feedback/internal-feedback.router'
import { invitationRouter } from '@/packages/user/features/invitation/invitation.router'
import { linkShorteningRouter } from '@/packages/user/features/link-shortening/link-shortening.router'
import { marketingAssetRouter } from '@/packages/user/features/marketing-asset/marketing-asset.router'
import { notificationRouter } from '@/packages/user/features/notification/notification.router'
import { organizationRouter } from '@/packages/user/features/organization/organization.router'
import { securityRouter } from '@/packages/user/features/security/security.router'
import { teamRouter } from '@/packages/user/features/team/team.router'
import { uiRouter } from '@/packages/user/features/ui/ui.router'
import { unkeyRouter } from '@/packages/user/features/unkey/unkey.router'
import { userRouter } from '@/packages/user/features/user/user.router'
export const appRouter = createTRPCRouter({
    // Admin routes
    adminEmail: adminEmailRouter,
    adminInternalBlog: adminInternalBlogRouter,
    adminInternalChangelog: adminInternalChangelogRouter,
    adminInternalFeedback: adminInternalFeedbackRouter,
    adminInternalRoadmap: adminInternalRoadmapRouter,
    adminMaintenanceMode: adminMaintenanceModeRouter,
    adminOrganization: adminOrganizationRouter,
    adminSecurity: adminSecurityRouter,
    adminStripe: adminStripeRouter,
    adminUser: adminUserRouter,

    // AI routes
    aiImage: aiImageRouter,
    aiText: aiTextRouter,

    // Anon routes
    anonInternalBlog: anonInternalBlogRouter,
    anonInternalChangelog: anonInternalChangelogRouter,
    anonInternalFeedback: anonInternalFeedbackRouter,
    revalidate: revalidateRouter,

    // Auth routes
    auth: authRouter,
    socialMedia: socialMediaRouter,

    // User routes
    brand: brandRouter,
    content: contentRouter,
    file: fileRouter,
    internalFeedback: internalFeedbackRouter,
    invitation: invitationRouter,
    linkShortening: linkShorteningRouter,
    marketingAsset: marketingAssetRouter,
    notification: notificationRouter,
    organization: organizationRouter,
    campaign: campaignRouter,
    security: securityRouter,
    team: teamRouter,
    ui: uiRouter,
    unkey: unkeyRouter,
    user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
