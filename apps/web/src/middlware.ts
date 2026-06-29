import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const hostname = req.headers.get('host') || '';

    if (hostname.startsWith('app.')) {
        url.pathname = `/apps${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    url.pathname = `/marketing${url.pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ],
};