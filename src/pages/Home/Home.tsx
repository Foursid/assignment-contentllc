import { PageWrapper } from '@/components/layout/PageWrapper';
import { Card } from '@/components/ui/Card';
import { List } from '@/components/ui/List';
import { Summary } from '@/components/ui/Summary';
import { useTrips } from '@/hooks';
import { useEffect } from 'react';
import './home.scss';

export default function Home() {
    const { items, isLoading, hasMore, loadMore } = useTrips();

    useEffect(() => {
        if (items.length && !hasMore) {
            alert('Поездок больше не найдено');
        }
    }, [hasMore, items.length]);

    return (
        <PageWrapper>
            <div className="home centered">
                <section className="home__section cargo-section">
                    <Summary className="cargo-section__summary" value={items.length} />
                    <List className="cargo-section__list" onReachEnd={loadMore}>
                        {items.map((trip) =>
                            <Card key={trip.id} trip={trip} />
                        )}
                        {isLoading && <span>Подгружаем поездки...</span>}
                    </List>
                </section>
            </div>
        </PageWrapper>
    );
}
