export default function MusicWidget() {
    const mockTrack = {
        id: "track_mock_01",
        title: "Midnight Drive",
        artist: "Neon Atlas",
        album: "City Lights",
        coverUrl:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
        durationSec: 214,
        currentTimeSec: 42,
        isPlaying: true,
    };

    return (
        <div className="p-2 flex flex-col items-start justify-start h-full">
            <div>
                <img src={mockTrack.coverUrl} alt={mockTrack.title} className="rounded-lg w-full h-full object-cover aspect-square"/>
            </div>
            <div className="mt-2 w-full flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-foreground">{mockTrack.title}</p>
                <p className="text-xs text-muted-foreground">{mockTrack.artist}</p>
            </div>
        </div>
    );
}