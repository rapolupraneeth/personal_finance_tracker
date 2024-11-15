@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String type; // income or expense
    private String category;
    private BigDecimal amount;
    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date = new Date();

    // Getters and setters
}
