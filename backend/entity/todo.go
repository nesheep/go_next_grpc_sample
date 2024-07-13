package entity

import (
	"time"

	"github.com/uptrace/bun"
)

type Todo struct {
	bun.BaseModel `bun:"table:todos,alias:t"`
	ID            int64     `bun:"id,pk,autoincrement"`
	Title         string    `bun:"title,notnull"`
	Completed     bool      `bun:"completed,notnull"`
	CreatedAt     time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt     time.Time `bun:",nullzero,notnull,default:current_timestamp"`
}
