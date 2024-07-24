CREATE TABLE mentorships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    about TEXT,
    length VARCHAR(255),
    languages VARCHAR(255),
    links TEXT[] NOT NULL,
    captions BOOLEAN,
    skill VARCHAR(255),
    created_by UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE mentorship_files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mentorship_id UUID NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_size BIGINT NOT NULL,
    file_type VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (mentorship_id) REFERENCES mentorships(id)
);

CREATE TABLE mentorship_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mentorship_id UUID NOT NULL,
    registrant UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (mentorship_id) REFERENCES mentorships(id),
    FOREIGN KEY (registrant) REFERENCES users(id)
);
