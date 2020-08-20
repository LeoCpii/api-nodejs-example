
import * as Sentry from '@sentry/node';

export class SentryService {
    get dsn() {
        return process.env.SENTRY_DSN;
    }

    public init() {
        Sentry.init({ dsn: this.dsn })
    }

    public exception(err: any) {
        Sentry.captureException(err)
    }
}